import React, { useEffect } from "react";
import { useItemStore } from "../store/useItemStore";
import { useQuery } from "@tanstack/react-query";

function useItemList() {
  const store = useItemStore();
  const query = useQuery({
    queryKey: ["catergorylist"],
    queryFn: () => store.fetchCatergoryList(),
    onSuccess: (data) => {
      store.setList(data);
    },
  });

  //   const createMutation = useMutation(store.createTodo);
  //   const deleteMutation = useMutation(store.deleteTodo);

  return {
    ...store,
    ...query,
    // createTodo: createMutation.mutate,
    // deleteTodo: deleteMutation.mutate,
    // isCreating: createMutation.isLoading,
    // isDeleting: deleteMutation.isLoading,
  };
}

export default useItemList;
