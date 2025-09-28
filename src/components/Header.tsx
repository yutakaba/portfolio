'use client'

import { styled } from '@linaria/react'

export default function Header() {
    return (
        <StyledHeader>
            <h1>Header</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: red;
    height: 100px;
    padding: 20px;
    border-bottom: 1px solid #ddd;
`
