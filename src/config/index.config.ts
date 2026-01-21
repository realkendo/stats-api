interface AppConfig{
  port: number;
  env: "development" | "production" | "test"
}

function getConfig(): AppConfig{

  // assigning port & env - with casted binding
  const port = Number(process.env.PORT);
  const env = process.env.NODE_ENV as AppConfig["env"];

  if(!env){
    throw new Error("NODE_ENV is not defined");
  }

  if(!port){
    throw new Error("PORT is not defined");
  }

  return{
    port, env,
  };
}

export const config = getConfig();