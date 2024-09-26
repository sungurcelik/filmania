import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Main = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/api/movies").then((res) => res.data),
  });

  return (
    <div className="px-5 md:px-10">
      <h2>HERO</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} refetch={refetch} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {data.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
