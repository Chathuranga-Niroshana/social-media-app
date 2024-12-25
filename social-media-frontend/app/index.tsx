import { Redirect } from "expo-router";
import { ROUTES } from "../src/routes";
import { useAppDispatch } from "../src/store";
import { useEffect } from "react";
import { PostActions } from "../src/store/features/posts";
import { POSTS } from "../src/data/posts";

export default function Root() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(PostActions.addPosts(POSTS))
  }, [])
  return (
    <Redirect href={ROUTES.ROOT} />
  );
}
