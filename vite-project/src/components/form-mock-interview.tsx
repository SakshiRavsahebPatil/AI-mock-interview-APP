"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ✅ Step 1: Zod schema
const formSchema = z.object({
  position: z.string().min(2, "Position is required"),
  description: z.string().min(5, "Description is required"),
  experience: z.number().min(0, "Experience must be positive"),
  techStack: z.string().min(2, "Tech stack is required"),
});

// ✅ Step 2: Infer FormData type
export type FormData = z.infer<typeof formSchema>;

interface FormMockInterviewProps {
  initialData?: Partial<FormData> | null; // allow passing data for edit mode
}

export default function FormMockInterview({ initialData }: FormMockInterviewProps) {
  // ✅ Step 3: useForm with schema & default values
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: initialData?.position || "",
      description: initialData?.description || "",
      experience: initialData?.experience ?? 0,
      techStack: initialData?.techStack || "",
    },
  });

  // ✅ Step 4: Strongly typed submit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-4 max-w-md mx-auto"
      >
        {/* Position field */}
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Frontend Developer" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Job description" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Experience field */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience (years)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  placeholder="0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tech Stack field */}
        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tech Stack</FormLabel>
              <FormControl>
                <Input {...field} placeholder="React, Node.js, etc." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {initialData ? "Update Interview" : "Create Interview"}
        </Button>
      </form>
    </Form>
  );
}
