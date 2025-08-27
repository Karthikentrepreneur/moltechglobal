import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LOCATIONS = [
  "Australia","Indonesia","Malaysia","Saudi Arabia",
  "Singapore","Thailand","UAE","UK","USA",
];

export default function GetInTouchCard() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Contact form:", data);
    alert("Thanks! We’ll be in touch.");
    form.reset();
  };

  return (
    <section className="relative py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)] px-6 sm:px-10 py-8 sm:py-10">
        <h3 className="text-center text-3xl sm:text-[34px] font-semibold text-foreground mb-8">
          Get in touch
        </h3>

        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Row 1 */}
          <Input name="name" placeholder="Type your name" required className="h-11" />
          <Input name="email" type="email" placeholder="Type your email" required className="h-11" />

          {/* Row 2 */}
          <Input name="phone" placeholder="Phone" className="h-11" />
          <select
            name="location"
            defaultValue=""
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-muted-foreground
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
          >
            <option value="" disabled>Select Location</option>
            {LOCATIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Row 3 */}
          <Input name="purpose" placeholder="Purpose" className="h-11" />
          <Input name="transportation" placeholder="Transportation Method" className="h-11" />

          {/* Comment full width */}
          <div className="sm:col-span-2">
            <Textarea name="comment" placeholder="Comment" rows={6} />
          </div>

          {/* Submit (left aligned like screenshot) */}
          <div className="sm:col-span-2">
            <Button type="submit" className="bg-royal-blue hover:bg-royal-blue/90 text-white px-6">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
