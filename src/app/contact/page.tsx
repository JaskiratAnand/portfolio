import Contacts from "@/components/Contacts";


export default function Contact() {
  return <>
    <div className="max-w-(--breakpoint-md) mx-auto pt-10 pb-2 px-6">
      <h1 className="text-2xl pt-4 md:text-4xl md:pt-8 font-bold pb-5 md:pb-8">Contact</h1>
      <Contacts />
    </div>
  </>
}

