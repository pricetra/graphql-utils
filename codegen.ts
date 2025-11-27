import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8080/graphql',
  documents: ['documents/**/*.ts'],
  generates: {
    'types/': {
      preset: 'client',
      // plugins: ['typescript', 'typescript-operations'],
      config: {
        // avoidOptionals: true,
        scalars: {
          ID: 'number',
        },
      },
    },
  },
};
export default config;
