# PWA Setup Guide - Eterna Interiors Hub

## Overview
Your app is now configured as a Progressive Web App (PWA)! Users can install it on their devices and use it like a native app.

## Features Implemented

### ✅ Installable
- Users can install the app on mobile and desktop devices
- Appears in app drawer/home screen/applications folder
- Launches in its own window

### ✅ Offline Support
- Service Worker caches assets for offline use
- Intelligent caching strategies for different resource types:
  - **Google Fonts**: CacheFirst (365 days)
  - **Images**: StaleWhileRevalidate (24 hours, 64 max entries)
  - **CSS/JS**: StaleWhileRevalidate (24 hours)
  - **API Calls**: NetworkFirst with fallback (24 hours, 10s timeout)

### ✅ Standalone Mode Optimization
- **Footer Hidden in PWA**: When installed as a standalone app, the footer is automatically hidden to provide a cleaner native app experience
- **Footer Visible in Browser**: The footer displays normally when accessed through a web browser

## Testing the PWA

### On Desktop (Chrome/Edge):
1. Run the development server: `npm run dev`
2. Open http://localhost:3000
3. Look for the install icon (⊕) in the address bar
4. Click "Install" to add the app to your desktop
5. Notice the footer disappears in standalone mode

### On Mobile (Android):
1. Deploy to a secure HTTPS domain (required for PWA)
2. Visit your site in Chrome/Firefox
3. Tap the "Add to Home Screen" prompt
4. Launch from your home screen
5. Notice the footer is hidden in app mode

### On Mobile (iOS):
1. Visit your site in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Launch from home screen

## Building for Production

When you build for production, PWA files are automatically generated:

```bash
npm run build
npm start
```

Generated PWA files:
- `/public/sw.js` - Service Worker
- `/public/workbox-*.js` - Workbox runtime
- `/public/sw.js.map` - Source map

## Customization Needed

### 🎨 App Icons (IMPORTANT!)
Replace placeholder icons in `/public/icons/` with your branded icons:
- Use your Eterna Interiors Hub logo
- Maintain square aspect ratio
- Use high-quality images
- Required sizes: 72, 96, 128, 144, 152, 192, 384, 512 pixels

**Tools to generate icons:**
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net/

### ⚙️ Manifest Configuration
Edit `/public/manifest.json` to customize:
- App name and short name
- Description
- Theme colors
- Background color
- Orientation preferences

### 🎯 Caching Strategy
Adjust caching in `next.config.js` based on your needs:
- Increase/decrease cache durations
- Add custom URL patterns
- Modify cache storage limits

## How Footer Hiding Works

The Footer component uses `useEffect` to detect standalone mode:

```typescript
const isStandalonePWA = 
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as any).standalone === true ||
  document.referrer.includes('android-app://');
```

This checks:
1. CSS media query for display mode
2. iOS standalone mode
3. Android TWA (Trusted Web Activity)

## Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder icons with branded ones
- [ ] Update manifest.json with final branding
- [ ] Test on multiple devices (iOS, Android, Desktop)
- [ ] Verify HTTPS is enabled (required for PWA)
- [ ] Test offline functionality
- [ ] Verify footer hides in standalone mode
- [ ] Check install prompts appear correctly
- [ ] Test service worker updates

## Updating the PWA

When you make changes:
1. The service worker will automatically update
2. Users get updates on next visit (with `skipWaiting: true`)
3. Changes to manifest.json may require reinstalling the app

## Troubleshooting

### PWA not installing:
- Ensure you're using HTTPS (or localhost for development)
- Check browser console for service worker errors
- Verify manifest.json is accessible

### Footer still showing in standalone:
- Clear browser cache
- Uninstall and reinstall the PWA
- Check console for JavaScript errors

### Offline not working:
- Check service worker registration in DevTools
- Verify cache storage in Application tab
- Review network requests when offline

## Resources

- [Next-PWA Documentation](https://github.com/shadowwalker/next-pwa)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
