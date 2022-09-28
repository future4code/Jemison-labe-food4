import styled from "styled-components"
import { useForm } from "../../hook"
import {LoginPageContainer, FormContainer} from './styled'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
} from '@chakra-ui/react'
import { useState } from "react"

export const LoginPage = () => {

    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [showPassword, setShowpassword] = useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(form);
        setIsEmailValid(/[a-zA-Z0-9]@[a-z]{3}\{.a-z}?/.test(form.email))
    }

    const onClickShowPassword=()=> {
        setShowpassword(!showPassword)
    }

    return (
        <LoginPageContainer>
            <h1>dadadasdsada</h1>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <FormControl isInvalid={!isEmailValid}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            placeholder='email'
                        />
                        {!isEmailValid ? (
                            <FormHelperText>
                            E-mail inválido..
                            </FormHelperText>
                        ) : undefined}
                    </FormControl>
                    <Button type='submit' variant='form'>Enviar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )


}