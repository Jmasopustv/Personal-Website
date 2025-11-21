# Email Configuration for Strapi Contact Form

Your contact form now uses Strapi instead of Google Apps Script!

## How It Works

1. **Form submission** → Saves to Strapi database (contacts collection)
2. **Email notification** → Sent to your email via configured SMTP provider
3. **View submissions** → Access via Strapi admin dashboard

## Email Provider Setup

You need to configure SMTP credentials in Railway to enable email sending.

### Option 1: Gmail (Free, Easy Setup)

**Steps:**
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Strapi Contact Form"
   - Copy the 16-character password

3. Add to Railway environment variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USERNAME=your-gmail@gmail.com
   SMTP_PASSWORD=your-app-password-here
   SMTP_DEFAULT_FROM=your-gmail@gmail.com
   SMTP_DEFAULT_REPLY_TO=jjmasopust@gmail.com
   ```

**Limitations:** 500 emails/day

### Option 2: SendGrid (Free Tier - Recommended)

**Steps:**
1. Sign up at https://sendgrid.com (free tier: 100 emails/day forever)
2. Verify your sender email
3. Create an API key
4. Add to Railway environment variables:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USERNAME=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   SMTP_DEFAULT_FROM=your-verified-email@domain.com
   SMTP_DEFAULT_REPLY_TO=jjmasopust@gmail.com
   ```

### Option 3: AWS SES (Most Cost-Effective at Scale)

**Steps:**
1. Sign up for AWS account
2. Verify your email in AWS SES
3. Create SMTP credentials
4. Add to Railway environment variables:
   ```
   SMTP_HOST=email-smtp.us-east-1.amazonaws.com
   SMTP_PORT=587
   SMTP_USERNAME=your-aws-smtp-username
   SMTP_PASSWORD=your-aws-smtp-password
   SMTP_DEFAULT_FROM=your-verified-email@domain.com
   SMTP_DEFAULT_REPLY_TO=jjmasopust@gmail.com
   ```

**Free tier:** 62,000 emails/month for first 12 months

## Adding Environment Variables to Railway

1. Go to https://railway.app/project/6cba462f-9bac-4f79-8bef-42958795e542
2. Click on your Strapi service
3. Go to **Variables** tab
4. Click **Raw Editor**
5. Add the SMTP variables from your chosen provider
6. Click **Deploy** to redeploy with new variables

## What Happens When Someone Submits the Form

1. **Data is saved** in Strapi's database (visible in admin panel)
2. **Email is sent** to jjmasopust@gmail.com with:
   - Sender's name
   - Sender's email (set as reply-to)
   - Their message
   - Timestamp
3. **Success message** shown to the user

## Viewing Contact Submissions

Access all form submissions in your Strapi admin:
- URL: https://strapibackend-production-b824.up.railway.app/admin
- Navigate to: Content Manager → Collection Types → Contacts

## Testing

Before deploying, test the contact form locally to ensure:
1. Submissions save to database ✓
2. Emails are sent successfully (once SMTP is configured)
3. Form resets after submission ✓

## Cost Summary

**For Personal Portfolio Site:**
- Strapi: **$0** (open source)
- Railway: **$0** (within free tier)
- Email: **$0** (using free tier)

**Total: $0/month**
