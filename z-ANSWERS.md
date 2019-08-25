## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

## One of the main purposes is to allow the server to keep the user "authenticated" when it makes requests across endpoints. Sessions prevent the user from having to enter their credentials every time they move to a different page.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

## Bcrypt performs a one-way conversion on passwords, turning them into cryptographic "hashes" before they are saved to the sever. Since the original password isn't saved to the server, if the server is compromised the users actual password (which might be used across many websites) isn't compromised.

- [ ] What does bcrypt do to slow down attackers?

##  Bcrypt adds a "salt", some type of random data, to the hashed password to change the output. This makes each password unique to the user and makes it impossible to use a "rainbow table" to look up inputs from a hashes.

- [ ] What are the three parts of the JSON Web Token?

## Header: includes the type of token and the signing algorithm
## Payload: contains information about the user
## Signature: ensures that payload is not changed enroute; uses the payload, a secret, and the alogorithm to create the signature.
