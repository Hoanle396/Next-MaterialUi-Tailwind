import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";
export const StyledCard = styled(Card)(() => ({
   display: 'flex',
   flexDirection: 'column',
   background: 'transparent',
   justifyContent: 'space-between',
   padding: '32px 24px',
   width: '648px',
   height: '200px',
   boxShadow: '0px 12px 16px 0px rgb(55 83 250 / 12%)',
   borderRadius: 24,
   margin: 12,
   flexShrink: 0,
   position: 'relative',
}))
export const StyledBox = styled(Box)(() => ({
   position: 'absolute',
   padding: 0,
   width: "100%",
   display: 'flex',
   justifyContent: 'unset',
   alignItems: 'center',
   bottom: 10,
}))
export const StyledAvatar = styled(Box)(() => ({
   display: 'inline-block',
   width: 50,
   height: 50,
   borderRadius: 25,
   backgroundColor: '#fff',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   backgroundSize: 'cover',
   marginRight: 16,
}))

export const StyledName = styled.p`
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   line-height: 25px;
   margin-bottom: 0;
`;
export const BoxInfo = styled(Box)(() => ({

}))