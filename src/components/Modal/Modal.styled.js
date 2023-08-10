import styled from "@emotion/styled";

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const ImageModal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;