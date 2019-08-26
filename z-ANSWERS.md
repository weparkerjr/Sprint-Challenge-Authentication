## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

## To keep the user "authenticated" when it makes requests across endpoints. Sessions prevent the user from having to re-enter their credentials.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

## Bcrypt performs a one-way conversion on passwords, turning them into "hashes" before they are saved to the sever. The original password isn't saved to the server and the users actual password (which might be used across many websites) isn't compromised if the server is hacked

- [ ] What does bcrypt do to slow down attackers?

##  Bcrypt adds a salt to the hashed password to change the output. Each password unique to the user.

- [ ] What are the three parts of the JSON Web Token?

## Header: includes the type of token and the signing algorithm
## Payload: contains information about the user
## Signature: ensures that payload is not changed enroute; uses the payload, a secret, and the alogorithm to create the signature.
