import { Suspense } from "react";

import UserListFallback from "@/partials/cabins/UserListFallback";
import UserList from "@/partials/cabins/UserList";
import Heading from "@/components/ui/Heading";

export default async function Page() {
  return (
    <>
      <Heading>All the beautiful cabins available</Heading>
      <Suspense fallback={<UserListFallback />}>
        <UserList />
      </Suspense>
    </>
  );
}
