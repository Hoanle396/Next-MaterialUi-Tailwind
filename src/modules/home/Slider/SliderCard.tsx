import { Typography } from '@mui/material';
import React from 'react'
import { BoxInfo, StyledAvatar, StyledBox, StyledCard, StyledName } from './styled';
const SliderCard = ({ desc, name, img }: { desc: string; name: string; img: string }) => {
  return (
    <StyledCard>
      <Typography color="secondary">{desc}</Typography>
      <StyledBox>
        <StyledAvatar
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></StyledAvatar>
        <BoxInfo>
          <StyledName className='text-purple-500' >{name}</StyledName>
        </BoxInfo>
      </StyledBox>
    </StyledCard>
  )
}

export default SliderCard