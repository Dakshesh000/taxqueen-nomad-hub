

## Mobile Quiz Complete Overhaul

### Issues Identified from Your Screenshot

| Issue | Root Cause |
|-------|-----------|
| Quiz overlay not on top of hero video | Hero section uses `z-[60]` on mobile, Quiz uses `z-50` |
| Chatbot appears above quiz | Both use `z-50`, DOM order determines stacking |
| Content is top-aligned | `flex-1` on question content div pushes items to fill space but centering fails |
| White space at bottom of card | Background image is on `QuestionWrapper` but content doesn't fill the modal |
| Background image doesn't fill quiz | QuestionWrapper has `h-full flex-1` but parent constraints are missing |

---

### Solution Overview

**Three-part fix:**
1. Fix z-index layering (Quiz > Hero > Chatbot)
2. Fix modal structure so background image fills entire card
3. Fix content centering within the quiz card

---

### Part 1: Z-Index Layering Fix

**File: `src/components/quiz/QuizModal.tsx`**

Change the modal backdrop from `z-50` to `z-[70]`:

```
Current: className="fixed inset-0 z-50 ..."
New:     className="fixed inset-0 z-[70] ..."
```

This ensures:
- Quiz Modal (`z-[70]`) > Hero Video (`z-[60]`) > Chatbot (`z-50`)
- Toast notifications remain on top at `z-[100]`

---

### Part 2: Modal Structure - Background Image Fills Card

**Problem:** Currently the structure is:
```
QuizModal (90dvh card)
└── ScrollArea (h-full)
    └── div (pb-safe-area)
        └── GlobalQuiz content
            └── Progress Bar
            └── flex-1 container
                └── QuestionWrapper (has background image)
```

The background image is inside `QuestionWrapper` but the modal's `bg-background` (white) shows through in gaps.

**Solution:** Restructure so the quiz card shows the background image directly:

**File: `src/components/quiz/QuizModal.tsx`**

1. Remove `bg-background` from the modal card - let the content provide the background
2. Ensure the children fill the entire modal space with `h-full`
3. Remove unnecessary wrappers that create gaps

```tsx
// Modal card - remove bg-background, let children fill
className={`
  relative shadow-lift-lg flex flex-col overflow-hidden
  w-[95%] max-w-2xl rounded-3xl
  h-[90dvh] max-h-[calc(90dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom))]
  md:h-auto md:w-full
  ${hasEngaged ? 'md:min-h-[620px] md:max-h-[90vh]' : 'md:max-h-[90vh]'}
`}

// Content wrapper - fill modal completely
<div className="flex-1 flex flex-col overflow-hidden h-full">
  {children}
</div>
```

**File: `src/components/quiz/GlobalQuiz.tsx`**

Update `quizContent` structure to ensure it fills the modal:

```tsx
const quizContent = (
  <div className="flex flex-col h-full min-h-full">
    {/* Progress bar - only shown when engaged */}
    {!showResults && currentStep > 0 && (
      <div className="flex-shrink-0 absolute top-0 left-0 right-0 z-20">
        <QuizProgress currentStep={currentStep} totalSteps={TOTAL_STEPS - 1} />
      </div>
    )}
    
    {/* Content - fills entire modal */}
    <div className="flex-1 min-h-0 h-full">
      {showResults ? (
        <QuizResults ... />
      ) : (
        renderStep()
      )}
    </div>
  </div>
);
```

---

### Part 3: Content Centering Fix

**File: `src/components/quiz/QuestionWrapper.tsx`**

The background image container and content container both need to fill the modal. Current issue is that `flex-1` on the children container makes it grow, but content isn't centered because:
1. The children div (`max-w-lg flex-1`) is also using `flex-1` which stretches it

**Fix the content structure:**

```tsx
return (
  <div className="relative w-full h-full flex flex-col overflow-hidden md:rounded-2xl">
    {/* Background layers - fill entire container */}
    {/* ... placeholder and main image (unchanged) ... */}

    {/* Content - vertically and horizontally centered */}
    <div 
      ref={contentRef}
      className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-6 md:py-8 text-center overflow-y-auto"
    >
      {/* Compass icon */}
      <div className="mb-4 ...">
        <TravelCompass ... />
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <h2>...</h2>
      </div>

      {/* Subtitle */}
      {subtitle && <p>...</p>}

      {/* Question Content - DON'T use flex-1 here */}
      <div className="w-full max-w-lg">
        {children}
      </div>
    </div>
  </div>
);
```

Key change: Remove `flex-1` from the question content wrapper so it doesn't stretch and push content to the top.

---

### Part 4: Progress Bar Positioning

The progress bar should overlay at the top of the quiz card, not push content down.

**File: `src/components/quiz/GlobalQuiz.tsx`**

Make progress bar absolutely positioned:

```tsx
{!showResults && currentStep > 0 && (
  <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/30 to-transparent pt-2 pb-4">
    <QuizProgress currentStep={currentStep} totalSteps={TOTAL_STEPS - 1} />
  </div>
)}
```

---

### Summary of Changes

| File | Changes |
|------|---------|
| `src/components/quiz/QuizModal.tsx` | (1) Change `z-50` to `z-[70]` on backdrop, (2) Remove `bg-background` from card, (3) Simplify content wrapper to `h-full flex flex-col` |
| `src/components/quiz/QuestionWrapper.tsx` | (1) Use `h-full` instead of `flex-1` for main container, (2) Remove `flex-1` from children wrapper, (3) Ensure content uses `justify-center h-full` |
| `src/components/quiz/GlobalQuiz.tsx` | (1) Make progress bar absolutely positioned with gradient overlay, (2) Ensure `quizContent` uses `h-full min-h-full` |

---

### Expected Results

| Issue | Fixed By |
|-------|----------|
| Quiz below hero video | `z-[70]` on modal backdrop |
| Chatbot above quiz | Chatbot stays at `z-50`, quiz at `z-[70]` |
| Top-aligned content | `justify-center h-full` on content container |
| White space at bottom | Remove `bg-background` from modal, background image fills card |
| Background not filling card | `h-full` propagation from modal to QuestionWrapper |

---

### Visual Result

After fix:
- Full-screen blurred website visible behind rounded quiz card (90% height)
- Background image fills entire quiz card from edge to edge
- Content (compass, title, buttons) perfectly centered vertically
- Progress bar overlays top of card with subtle gradient fade
- Quiz is clearly on top of hero section and chatbot

