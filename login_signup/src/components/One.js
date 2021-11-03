import React from "react";

export default function One() {
  const password = useModel("");
  const confirmPassword = useModel("");
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        model={password}
        required
        pattern={regex.moderatePassword}
        placeholder="Password"
      />
      <Input
        model={confirmPassword}
        // passing the model that should be imprinted/followed
        imprint-model={password}
        required
        placeholder="Confirm Password"
      />

      <button type="submit">Sign Up</button>
    </Form>
  );
}
