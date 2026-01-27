# Tablet Contact Section Layout Update

## Task
- [ ] Change contact information section (CALL US, EMAIL US, VISIT US) to vertical stacked layout on tablets only
- [ ] Keep mobile layout unchanged (already vertical)
- [ ] Keep desktop layout horizontal (lg: breakpoint)
- [ ] Verify all three layouts work correctly

## Implementation
- [ ] Update Contact.tsx component
- [ ] Change from `sm:flex-row` to `lg:flex-row` for the contact info container
- [ ] This will make tablets use the vertical (flex-col) layout like mobile
- [ ] Desktop (lg: and above) will use horizontal layout
