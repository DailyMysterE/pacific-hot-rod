# Logo Replacement Documentation

## Current Logo Implementation

### Header Logo (Header.tsx - Line 71-75)
- **File**: `/images/pacific-hot-rod-logo.webp`
- **Classes**: `h-10 md:h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105`
- **Sizing**:
  - Mobile: `h-10` (40px height)
  - Tablet (md): `h-14` (56px height)
  - Desktop (lg): `h-16` (64px height)
  - Width: `w-auto` (maintains aspect ratio)
- **Effects**: Hover scale effect (105%)

### Footer Logo (Footer.tsx - Line 19-23)
- **File**: `/images/pacific-hot-rod-logo.webp`
- **Classes**: `h-10 md:h-14 w-auto mb-4`
- **Sizing**:
  - Mobile: `h-10` (40px height)
  - Tablet/Desktop (md): `h-14` (56px height)
  - Width: `w-auto` (maintains aspect ratio)
  - Bottom margin: `mb-4` (16px)

## New Logo File
- **Source**: `/home/ubuntu/upload/p-logo2.webp`
- **Target**: `/home/ubuntu/pacific-hot-rod/client/public/images/pacific-hot-rod-logo.webp`

## Action Plan
1. Copy new logo file to replace existing logo in public/images/
2. Keep all sizing classes identical
3. Verify appearance in both header and footer
