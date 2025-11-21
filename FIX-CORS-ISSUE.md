# URGENT: Fix CORS Configuration in Strapi

## Problem
The live site at `https://johnmasopustv.com` is blocked from accessing your Strapi backend due to CORS (Cross-Origin Resource Sharing) policy.

**Error:**
```
Access to fetch at 'https://backend-production-8183.up.railway.app/api/...' from origin 'https://johnmasopustv.com' has been blocked by CORS policy
```

## Solution

You need to add `johnmasopustv.com` to the allowed origins in your Strapi CORS configuration on Railway.

### Step 1: Access Strapi Admin

1. Go to: https://backend-production-8183.up.railway.app/admin
2. Log in with your admin credentials

### Step 2: Update CORS Configuration

**Option A: Via Strapi Admin Panel (Recommended)**

1. In Strapi admin, go to **Settings** → **Global Settings** → **CORS**
2. Add your domain to allowed origins:
   - `https://johnmasopustv.com`
   - `https://www.johnmasopustv.com` (if you use www subdomain)
3. Save changes
4. Restart your Railway service if needed

**Option B: Via Railway Environment Variables**

1. Go to your Railway dashboard
2. Select your Strapi backend service
3. Go to **Variables** tab
4. Add or update the following environment variable:

```
STRAPI_ADMIN_CLIENT_URL=https://johnmasopustv.com
```

And/or add:

```
CLIENT_URL=https://johnmasopustv.com
```

5. Redeploy the service

**Option C: Via Backend Configuration File (If you have access)**

If you need to manually update the config file in your Strapi backend:

1. Access your backend code (likely in the `/backend` folder or Railway)
2. Edit `config/middlewares.js` or `config/middleware.ts`
3. Update the CORS configuration:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://backend-production-8183.up.railway.app'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://backend-production-8183.up.railway.app'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:1337',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'https://johnmasopustv.com',
        'https://www.johnmasopustv.com',
        'https://backend-production-8183.up.railway.app'
      ],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

4. Commit and push to trigger Railway redeploy
5. Or use Railway CLI to redeploy

### Step 3: Verify Fix

After updating CORS configuration:

1. Wait for Railway to redeploy (if needed)
2. Clear your browser cache
3. Visit https://johnmasopustv.com
4. Open browser console (F12)
5. Refresh the page
6. Verify no CORS errors appear
7. Check that dynamic content loads:
   - About section text
   - Services cards
   - Education/Experience timelines
   - Skills cloud
   - Projects grid
   - Contact form submission works

## Quick Test

After fixing CORS, you should see:
- ✅ No red CORS errors in console
- ✅ About text loads
- ✅ Services display
- ✅ Projects show up
- ✅ Contact form can submit
- ✅ Console shows: "Revolutionary portfolio initialized successfully! 🚀"

## Current Configuration Needed

Add these domains to your Strapi CORS allowlist:
- `https://johnmasopustv.com`
- `https://www.johnmasopustv.com` (if applicable)

## Why This Happened

Your Strapi backend is currently only allowing requests from:
- `http://localhost` (for development)
- Maybe some Railway URLs

But NOT from your production domain `johnmasopustv.com`.

When the browser tries to fetch data from a different origin (your Railway backend) than where the page is hosted (GitHub Pages), it requires CORS headers to allow this.

## Need Help?

If you can't access Strapi admin or Railway dashboard, let me know and I can help troubleshoot further.

---

**Priority:** 🔴 CRITICAL - Site won't work until this is fixed
**Time to Fix:** 5-10 minutes
**Difficulty:** Easy - just update configuration
