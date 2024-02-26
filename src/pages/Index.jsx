import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, Alert, AlertIcon, Image } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Perform authentication logic
    console.warn("Login not implemented.");
    setLoginError(true);
  };

  return (
    <Container centerContent>
      <VStack spacing={8} py={12}>
        <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1523485474951-78fcd9344f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBsb2dpbnxlbnwwfHx8fDE3MDg5NzIwNDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Secure Login" />
        <Heading as="h1">Login</Heading>
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          {loginError && (
            <Alert status="error" mb={5}>
              <AlertIcon />
              Incorrect username or password.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" size="lg" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" size="lg" />
              </FormControl>
              <Button leftIcon={<FaLock />} colorScheme="blue" width="full" mt={4} type="submit">
                Sign In
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
