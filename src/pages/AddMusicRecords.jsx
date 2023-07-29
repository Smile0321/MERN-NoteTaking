import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useToast,
  VStack,
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMusicRecords } from "../redux/app/action";

const AddMusicRecords = () => {
  const navigate = useNavigate();
  const [musicRecord, setMusicRecord] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const { token } = useSelector((store) => store.AuthReducer);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setMusicRecord({ ...musicRecord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMusicRecords(musicRecord, token, toast)).then(() =>
      navigate(`/`)
    );
  };

  return (
    <Box h="100vh">
      <Container
        border={"1px solid silver"}
        mt={["60px", "80px"]}
        borderRadius={"2%"}
        p={["10px", "20px", "30px"]}
        maxW={"400px"}
        boxShadow="dark-lg"
      >
        <VStack gap={"10px"}>
          <Heading>Add Note</Heading>

          <Input
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
          />

          {/* <Input
            type="text"
            name="description"
            placeholder="Enter Description"
            onChange={handleChange}
          /> */}
          <Textarea
            type="text"
            name="description"
            placeholder="Enter Description"
            onChange={handleChange}
          />

          <Button onClick={handleSubmit} w="100%" bg={"pink"} fontWeight="bold" type="submit">
            ADD
          </Button>
          <Button onClick={() => navigate(`/`)} w="100%" fontWeight="bold" >
            Cancel
          </Button>

        </VStack>

      </Container>
    </Box>
  );
};

export default AddMusicRecords;
