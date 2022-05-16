import { ProfileProps } from "../../types/profile";
import { profileMock } from "./mock";

export const ProfileService = {
  get: (): ProfileProps => {
    // TODO: include api call
    return profileMock;
  },
};
