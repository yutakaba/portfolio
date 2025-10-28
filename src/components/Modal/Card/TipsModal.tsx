'use client';

import * as React from 'react'
import { styled } from '@linaria/react'
import { useDisclosure, Button } from '@chakra-ui/react'

type Props = {
  tipText?: string
}

export const TipsModal = ({ tipText = 'HTML/CSSが苦手でもOK！実践しながら慣れるコツ' }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    React.useEffect (() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    },[isOpen,onClose])

  return (
    <Wrapper>
      <TipButton onClick={(e) => {
        e.stopPropagation() // Linkクリックを無効化
        onOpen()
      }}>
        💡
      </TipButton>

      {isOpen && (
        <StyledTipsModal>
          <TipHeader>学習のヒント</TipHeader>
          <TipText>{tipText}</TipText>
          <CloseButton onClick={onClose}>閉じる</CloseButton>
        </StyledTipsModal>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const TipButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

const StyledTipsModal = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  width: 220px;
  z-index: 10;
`

const TipHeader = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const TipText = styled.p`
  font-size: 13px;
  color: #333;
  line-height: 1.4;
`

const CloseButton = styled(Button)`
  margin-top: 8px;
  font-size: 12px;
`
