import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
    color: white;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`;

export default function Featured() {
  return (
    <Bg>
        <Center>
            <Wrapper>
                <div>
                    <h1>Pro anywhere</h1>
                    <p>
                        DNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                    </p>
                </div>
                <div>
                    <img src="" alt=""></img>
                </div>
            </Wrapper>
        </Center>
    </Bg>
  );
}
