
## Make Chatbot Visible Site-Wide + Add Greeting Bubble

### Problem Identified

The `CompassChatButton` component is only rendered in `src/pages/Index.tsx` (line 99). It is NOT included in other pages like Contact, About, Services, or Tools. This is why the chatbot isn't visible on the Contact page.

### Solution Overview

1. **Move the chatbot to `App.tsx`** so it appears on ALL pages
2. **Add a greeting bubble** that appears briefly to attract attention, styled as a friendly nomad travel guide

---

### Part 1: Make Chatbot Visible on All Pages

**File: `src/App.tsx`**

Add the `CompassChatButton` component inside the `BrowserRouter` wrapper so it renders on every page:

```tsx
// Add import
import { CompassChatButton } from "@/components/common";

// Add inside BrowserRouter, after Routes
<BrowserRouter>
  {/* ... existing content ... */}
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {/* ... routes ... */}
    </Routes>
  </Suspense>
  <CompassChatButton />  {/* ADD HERE - renders on all pages */}
</BrowserRouter>
```

**File: `src/pages/Index.tsx`**

Remove the `CompassChatButton` from Index.tsx since it will now be in App.tsx:

```tsx
// Remove import
import { CompassChatButton } from "@/components/common";

// Remove from JSX (line 99)
<CompassChatButton />
```

---

### Part 2: Add Greeting Bubble with Nomad Travel Guide Character

**File: `src/components/common/CompassChatButton.tsx`**

Add a greeting bubble that:
- Appears after 3 seconds on page load
- Auto-dismisses after 6 seconds
- Shows a short, attention-grabbing message in nomad travel guide character
- Has a close button for immediate dismissal
- Only shows once per session (using sessionStorage)

**Greeting Message Examples** (nomad travel guide character, super short):

```
"Hey there, fellow traveler! 🧭 Need help navigating nomad taxes?"
```

or

```
"Lost on the tax trail? I've got your map! 🗺️"
```

**Implementation:**

```tsx
const CompassChatButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const [isWiggling, setIsWiggling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  // Show greeting once per session after delay
  useEffect(() => {
    const hasSeenGreeting = sessionStorage.getItem('chatGreetingSeen');
    if (hasSeenGreeting || isOpen) return;

    const showTimer = setTimeout(() => {
      setShowGreeting(true);
    }, 3000); // Show after 3 seconds

    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
      sessionStorage.setItem('chatGreetingSeen', 'true');
    }, 9000); // Hide after 9 seconds total (6 seconds visible)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  const dismissGreeting = () => {
    setShowGreeting(false);
    sessionStorage.setItem('chatGreetingSeen', 'true');
  };

  return (
    <>
      {/* Greeting Bubble */}
      {showGreeting && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 max-w-[240px] animate-fade-in-up">
          <div className="bg-background rounded-2xl shadow-lg border border-border p-3 relative">
            <button
              onClick={dismissGreeting}
              className="absolute -top-2 -right-2 w-5 h-5 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground hover:bg-muted/80"
              aria-label="Dismiss"
            >
              ×
            </button>
            <p className="text-sm text-foreground">
              Hey there, fellow traveler! 🧭 Need help navigating nomad taxes?
            </p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-background border-r border-b border-border rotate-45 transform" />
        </div>
      )}

      <button ... >
        {/* existing compass SVG */}
      </button>

      <ChatDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
});
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add `CompassChatButton` import and render inside `BrowserRouter` |
| `src/pages/Index.tsx` | Remove `CompassChatButton` import and usage (now global) |
| `src/components/common/CompassChatButton.tsx` | Add greeting bubble with auto-show/hide logic and session persistence |

---

### Technical Details

**Greeting Bubble Behavior:**
- Shows 3 seconds after page load
- Remains visible for 6 seconds
- Can be dismissed manually via × button
- Uses `sessionStorage` to show only once per browser session
- Hidden when chat drawer is open
- Positioned above the compass button with a speech bubble tail

**Animation:**
- Uses existing `animate-fade-in-up` keyframe from Tailwind config

**Character Voice:**
- Friendly, casual nomad travel guide
- Short and non-intrusive
- Uses compass/map metaphor for taxes
- Single emoji for personality without being overwhelming

---

### Console Errors Note

The current console errors about "Function components cannot be given refs" relate to the `Contact`, `Navbar`, and `Footer` components. These are separate issues from the chatbot visibility and can be addressed in a follow-up if needed (they require adding `forwardRef` to those components).
