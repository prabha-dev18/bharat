import { redirect } from "next/navigation";

export default async function SchemeAliasPage({ params }) {
  const { slug } = await params;
  redirect(`/government-schemes/${slug}`);
}
