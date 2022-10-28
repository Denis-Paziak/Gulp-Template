import { path } from "../path.js";
import { deleteAsync } from "del";

export const reset = () => {
    return deleteAsync(path.buid.home);
}
