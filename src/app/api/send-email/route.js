import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const attachment = formData.get("attachment");

const data = {
  fullName: formData.get("fullName"),
  company: formData.get("company"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  vesselName: formData.get("vesselName"),
  imoNumber: formData.get("imoNumber"),
  flagState: formData.get("flagState"),
  vesselType: formData.get("vesselType"),
  dwtGt: formData.get("dwtGt"),
  inspectionType: formData.get("inspectionType"),
  inspectionDate: formData.get("inspectionDate"),
  urgency: formData.get("urgency"),
  vesselStatus: formData.get("vesselStatus"),
  currentPort: formData.get("currentPort"),
  contactMethod: formData.get("contactMethod"),
  bestTime: formData.get("bestTime"),
  message: formData.get("message"),

  // Honeypot Field
  website: formData.get("website"),
  formLoadedAt: formData.get("formLoadedAt"),
};

// ================================
// Honeypot Spam Protection
// ================================

if (data.website && data.website.trim() !== "") {
  return NextResponse.json(
    {
      success: false,
      message: "Spam detected.",
    },
    { status: 400 }
  );
}
// ================================
// Time-based Spam Protection
// ================================

const timeTaken = Date.now() - Number(data.formLoadedAt);

if (timeTaken < 3000) {
  return NextResponse.json(
    {
      success: false,
      message: "Spam detected.",
    },
    { status: 400 }
  );
}

// ================================
// Server-side Attachment Validation
// ================================

if (attachment && attachment.size > 0) {

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
     "image/jpg",
    "image/png",
  ];

  const maxSize = 20 * 1024 * 1024; // 20 MB

  if (!allowedTypes.includes(attachment.type)) {

    return NextResponse.json(
      {
        success: false,
        message: "Invalid attachment type.",
      },
      { status: 400 }
    );

  }

  if (attachment.size > maxSize) {

    return NextResponse.json(
      {
        success: false,
        message: "Attachment exceeds 20 MB.",
      },
      { status: 400 }
    );

  }

}

// ================================
// Attachment Processing
// ================================

let emailAttachments = [];

if (attachment && attachment.size > 0) {

  const buffer = Buffer.from(
    await attachment.arrayBuffer()
  );

  emailAttachments.push({
    filename: attachment.name,
    content: buffer,
    contentType: attachment.type,
  });

}

// Generate Unique Request ID

const today = new Date();

const requestId =
  "MAG-" +
  today.getFullYear() +
  String(today.getMonth() + 1).padStart(2, "0") +
  String(today.getDate()).padStart(2, "0") +
  "-" +
  Math.random().toString(36).substring(2, 8).toUpperCase();

  // Submission Date & Time

const submittedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const submittedTime = today.toLocaleTimeString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
}) + " IST";
  
   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

    await transporter.sendMail({
      from: `"Marine Audit Global" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Inspection Request - ${data.company || "Unknown Company"}`,
    html: `
<div style="font-family:Arial,sans-serif;background:#f4f6f9;padding:30px;">

<div style="max-width:800px;margin:auto;background:#ffffff;border-radius:12px;border:1px solid #dcdcdc;overflow:hidden;">

<div style="background:#081120;padding:25px;text-align:center;">
<h1 style="margin:0;color:#D4AF37;font-size:30px;">
Marine Audit Global
</h1>

<p style="margin-top:8px;color:white;font-size:16px;">
Professional Marine Assurance & Inspection Services
</p>
</div>

<div style="padding:30px;">

<h2 style="color:#081120;border-bottom:3px solid #D4AF37;padding-bottom:8px;">
🚢 New Inspection Request
</h2>

<p style="font-size:16px;color:#555;margin-top:10px;">
<strong>Request ID:</strong> ${requestId}
</p>

<p style="font-size:15px;color:#555;">
<strong>Submitted On:</strong> ${submittedDate}
<br>
<strong>Submitted At:</strong> ${submittedTime}
</p>

<h3 style="color:#D4AF37;">CLIENT INFORMATION</h3>

<table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td width="35%"><strong>Full Name</strong></td>
<td>${data.fullName}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Company</strong></td>
<td>${data.company}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${data.email}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Phone / WhatsApp</strong></td>
<td>${data.phone}</td>
</tr>

</table>

<br>

<h3 style="color:#D4AF37;">VESSEL INFORMATION</h3>

<table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td width="35%"><strong>Vessel Name</strong></td>
<td>${data.vesselName}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>IMO Number</strong></td>
<td>${data.imoNumber}</td>
</tr>

<tr>
<td><strong>Flag State</strong></td>
<td>${data.flagState}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Vessel Type</strong></td>
<td>${data.vesselType}</td>
</tr>

<tr>
<td><strong>DWT / GT</strong></td>
<td>${data.dwtGt || "Not Provided"}</td>
</tr>

</table>

<br>

<h3 style="color:#D4AF37;">INSPECTION DETAILS</h3>

<table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td width="35%"><strong>Inspection Type</strong></td>
<td>${data.inspectionType}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Inspection Date</strong></td>
<td>${data.inspectionDate}</td>
</tr>

<tr>
<td><strong>Urgency</strong></td>
<td>${data.urgency}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Vessel Status</strong></td>
<td>${data.vesselStatus}</td>
</tr>

<tr>
<td><strong>Current Port / Route</strong></td>
<td>${data.currentPort}</td>
</tr>

</table>

<br>

<h3 style="color:#D4AF37;">CONTACT PREFERENCES</h3>

<table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td width="35%"><strong>Preferred Contact Method</strong></td>
<td>${data.contactMethod}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Best Time to Contact</strong></td>
<td>${data.bestTime}</td>
</tr>

</table>

<br>

<h3 style="color:#D4AF37;">ADDITIONAL INFORMATION</h3>

<div style="background:#f7f7f7;padding:18px;border-left:5px solid #D4AF37;border-radius:6px;white-space:pre-wrap;">

${data.message || "No additional information provided."}

</div>

<br>

<hr>

<p style="font-size:13px;color:#666;text-align:center;line-height:1.6;">

This inspection request was automatically generated from the
<strong>Marine Audit Global</strong> website.

<br><br>

© Marine Audit Global

</p>

</div>

</div>

</div>
`,

attachments: emailAttachments,

});

    await transporter.sendMail({

  from: `"Marine Audit Global" <${process.env.SMTP_USER}>`,

  to: data.email,

  subject: "Marine Audit Global | Inspection Request Received",

  html: `

<div style="font-family:Arial,Helvetica,sans-serif;background:#f4f7fb;padding:30px;">

<div style="max-width:700px;margin:auto;background:#ffffff;border-radius:12px;border:1px solid #dddddd;overflow:hidden;">

<div style="background:#081120;padding:30px;text-align:center;">

<h1 style="margin:0;color:#D4AF37;">
Marine Audit Global
</h1>

<p style="color:white;margin-top:10px;">
Professional Marine Assurance & Inspection Services
</p>

</div>

<div style="padding:35px;">

<h2 style="color:#081120;">
Inspection Request Successfully Received
</h2>

<p style="font-size:16px;color:#555;margin-top:10px;">
<strong>Your Request ID:</strong> ${requestId}
</p>

<p style="font-size:15px;color:#555;">
<strong>Submitted On:</strong> ${submittedDate}
<br>
<strong>Submitted At:</strong> ${submittedTime}
</p>

<p>

Dear <strong>${data.fullName}</strong>,

</p>

<p>

Thank you for contacting
<strong>Marine Audit Global</strong>.

</p>

<p>

We confirm that your inspection request has been successfully received.

</p>

<p>

Our Marine Assurance team is currently reviewing the information you submitted.

</p>

<p>

One of our consultants will contact you shortly using your preferred contact method.

</p>

<div style="background:#f8f8f8;padding:18px;border-left:5px solid #D4AF37;border-radius:6px;">

<strong>Inspection Summary</strong>

<br><br>

Vessel:
<strong>${data.vesselName}</strong>

<br>

Inspection:
<strong>${data.inspectionType}</strong>

<br>

Requested Date:
<strong>${data.inspectionDate}</strong>

</div>

<br>

<p>

If your request is urgent, please reply directly to this email.

</p>

<p>

Thank you for choosing Marine Audit Global.

</p>

<br>

<p>

Kind Regards,

<br><br>

<strong>Marine Audit Global</strong>

<br>

Global Standards. Trusted Assurance.

</p>

<hr>

<p style="font-size:12px;color:#777;text-align:center;">

This is an automatically generated acknowledgement.

Please do not reply unless additional information is required.

</p>

</div>

</div>

</div>

`

});

    return NextResponse.json({
      success: true,
      message: "Inspection request sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      { status: 500 }
    );
  }
}