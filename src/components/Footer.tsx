"use client";

const day = new Date();
const year = day.getFullYear();

export default function Footer() {
  return (
      <footer>
        <p className="mt-40 mx-6 py-2 text-muted-foreground border-t border-border">
          &copy; {year} Tenji Matsumoto
        </p>
      </footer>
  );
}
