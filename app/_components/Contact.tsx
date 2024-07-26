import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea";
  import ShimmerButton from "@/components/magicui/shimmer-button";
  import BoxReveal from "@/components/magicui/box-reveal";

type Props = {}

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
 

const formSchema = z.object({
    name: z.string().min(2).max(50),
    phone: z.string().min(8).max(12).regex(phoneRegex, 'Invalid Number!'),
    email: z.string().min(2).max(50).regex(emailRegex, "Invalid Email!"),
    message: z
    .string()
    .min(50, {
      message: "You have to tell me a little bit more about yourself or your project.",
    })
    .max(300, {
      message: "I can get to know more after a meeting ;)",
    }),
  })

const Contact = (props: Props) => {
    const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    
      toast({
        title: "Looking forwad to meeting you!",
        description: "Check your email to setup a quick meeting with me.",
      })
      console.log(values)

    form.reset()
  }
  return (
    <section id='contact' className="min-h-screen">
        <BoxReveal boxColor={"#000000"} duration={0.5}>
            <h1 className="uppercase text-5xl  md:text-8xl text-white font-[800] my-12">Let's Work<br /> <span className="text-[#b6b4bd33]">together</span></h1>
        </BoxReveal>
            
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your name" className="w-full" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Tell me a little bit about yourself . . . "
                            className="resize-none"
                            {...field}
                        />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />
                <ShimmerButton className="shadow-2xl mt-6" type="submit">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Send me a message
                    </span>
                </ShimmerButton>
                
                
                </form>
            </Form>
        </section>
  )
}

export default Contact