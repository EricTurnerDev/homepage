
export default function Analytics() {
    const src = 'https://static.cloudflareinsights.com/beacon.min.js';
    const token = "b4d83cf5c97b483594f68da0b953ad70";
    return (
        <script defer
                src={src}
                data-cf-beacon={`{"token": ${token}`}>
        </script>
    )
}