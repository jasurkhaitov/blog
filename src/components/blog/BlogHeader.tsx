
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function BlogHeader() {
  return (
    <Terminal>
      <TypingAnimation>&gt; initializing personal blog...</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Connected to brain 🧠</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Fetching thoughts, ideas & experiences...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Markdown renderer ready 📝</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Developer mode activated 💻</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Importing caffeine ☕️...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Success! Blog booted up.</span>
      </AnimatedSpan>

      <TypingAnimation delay={5000} className="text-muted-foreground">
        Welcome to my corner of the internet 🌍
      </TypingAnimation>
    </Terminal>
  );
}

