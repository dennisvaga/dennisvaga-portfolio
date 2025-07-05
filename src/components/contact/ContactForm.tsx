"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/layouts/SectionContainer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useDirection } from "@/hooks/useDirection";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const t = useTranslations("Contact");
  const { textAlign, isRtl } = useDirection();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[var(--contact-bg-from)] via-[var(--contact-bg-midpoint)] to-[var(--contact-bg-to)]">
      <SectionContainer className={`${textAlign.responsive}`}>
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className={`${textAlign.responsive} space-y-4`}>
            <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Mobile: 1st, Desktop: Right Column (spans both rows) */}
            <Card className="p-8 order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            {t("form.name")}
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="text"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-muted-foreground placeholder:text-muted-foreground/40"
                              placeholder={t("form.namePlaceholder")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            {t("form.email")}
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-muted-foreground placeholder:text-muted-foreground/40"
                              placeholder={t("form.emailPlaceholder")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t("form.subject")}
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-muted-foreground placeholder:text-muted-foreground/40"
                            placeholder={t("form.subjectPlaceholder")}
                          />
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
                        <FormLabel className="text-muted-foreground">
                          {t("form.message")}
                        </FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-muted-foreground placeholder:text-muted-foreground/40"
                            placeholder={t("form.messagePlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full py-3 text-white"
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        {t("form.sending")}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t("form.send")}
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Contact Info - Mobile: 2nd, Desktop: Left Column Top */}
            <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1">
              <h3 className="text-xl font-semibold mb-6">{t("getInTouch")}</h3>
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  label={t("email")}
                  value="contact@dennisvaga.com"
                />

                <ContactInfoItem
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  label={t("phone")}
                  value={isRtl ? "054-7710331" : `+972 50-7710331`}
                />

                <ContactInfoItem
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  label={t("location")}
                  value="Petah Tikva, Israel"
                />
              </div>
            </div>

            {/* Availability - Mobile: 3rd, Desktop: Left Column Bottom */}
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <h3 className="text-xl font-semibold mb-4">
                {t("availability")}
              </h3>
              <p className="text-muted-foreground">{t("availabilityText")}</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
