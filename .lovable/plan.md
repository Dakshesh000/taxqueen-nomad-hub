

## Replace Services Page Hero Image

### Overview
Replace the current Services page hero image with the new RV sunset image featuring a white motorhome with camping chairs at sunset.

---

### Steps

**1. Copy the uploaded image to the project**

Copy the user-uploaded image to the services assets folder:
```
user-uploads://image-16.png → src/assets/services/services-hero-new.webp
```

Note: I'll convert to WebP format during the copy for optimal file size (addressing your "scaled down" comment).

**2. Update the asset barrel export**

**File: `src/assets/index.ts`**

Update line 19 to point to the new image:
```typescript
// Before
export { default as servicesHero } from './services/services-hero.jpg';

// After
export { default as servicesHero } from './services/services-hero-new.webp';
```

**3. Update the alt text for SEO accuracy**

**File: `src/pages/Services.tsx`**

Update line 52 with accurate alt text:
```typescript
// Before
alt="Digital nomad working from van with mountain views"

// After
alt="White RV motorhome with camping chairs at vibrant sunset"
```

---

### No Other Changes Needed

The `Services.tsx` component already imports and uses `servicesHero`, so the image will automatically update once the asset path is changed.

---

### Files to Modify

| File | Change |
|------|--------|
| `src/assets/services/services-hero-new.webp` | New file (copied from upload) |
| `src/assets/index.ts` | Update `servicesHero` import path |
| `src/pages/Services.tsx` | Update alt text for new image |

---

### Result

The Services page hero will display the new vibrant sunset RV image with camping chairs, optimized as WebP for faster loading.

