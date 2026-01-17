"use client";

import type React from "react";
import { useRef } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Link } from "./ui/link";
import { Typo } from "./ui/typo";

export function Login({ isPasswordLogin }: { isPasswordLogin: boolean }) {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (isPasswordLogin) {
        toast("User wants to login with password");
      } else {
        toast.success("User wants to login with magic link", {
          description: "Check your email for a magic link",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      className="w-full max-w-md rounded-md border"
      method="POST"
      onSubmit={handleSubmit}
    >
      <article className="flex flex-col gap-4">
        <header className="border-b p-4">
          <Typo variant="h2">Login</Typo>
        </header>

        <fieldset className="p-4">
          <Label htmlFor="email">
            <Typo variant="small">Email</Typo>
            <Input
              id="email"
              name="email"
              ref={emailInputRef}
              required
              type="email"
            />
          </Label>

          {isPasswordLogin && (
            <Label htmlFor="password">
              <Typo variant="small">Password</Typo>
              <input
                id="password"
                name="password"
                ref={passwordInputRef}
                type="password"
              />
            </Label>
          )}
        </fieldset>

        <Typo asChild className="p-4">
          {isPasswordLogin ? (
            <Link
              className="w-fit text-left"
              href={{ pathname: "/", query: { magicLink: "yes" } }}
              variant="link"
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              className="w-fit text-left"
              href={{ pathname: "/", query: { magicLink: "no" } }}
              variant="link"
            >
              Go to Password Login
            </Link>
          )}
        </Typo>

        <Button className="m-4 p-4" type="submit">
          <Typo variant="small">Sign in with</Typo>
          {isPasswordLogin ? " Password" : " Magic Link"}
        </Button>
      </article>
    </form>
  );
}
