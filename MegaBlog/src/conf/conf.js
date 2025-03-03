const conf = {
    appwriteUrl: String(
        import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(
        import.meta.env.VITE_PROJECT_ID),
    appwritEDatabaseId: String(
        import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(
        import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(
        import.meta.env.VITE_BUCKET_ID),
}

console.log('Configuration:', conf)

export default conf