import React from 'react';
import {
    TextInput,
    PasswordInput,
    Paper,
    Container,
    Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export const AuthForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: value => (/^.{2,}$/).test(value) ? null : 'Password required',
        },
    });

    return (
        <Container size={420} my={40}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput id="user" label="Email" placeholder="you@email.com" required {...form.getInputProps('email')} />
                    <PasswordInput id="password" label="Password" placeholder="Your password" required mt="md" {...form.getInputProps('password')} />
                    <Button type="submit" fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </form>
        </Container>
    );
};
