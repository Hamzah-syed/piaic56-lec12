import Form from "@/components/ui/form";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  let supabase = await createClient();
  const data = await supabase.from("products").select("*");

  return (
    <div>
      <Form />
    </div>
  );
}
