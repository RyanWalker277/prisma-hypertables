-- Select data from the last hour
SELECT *
FROM "Log"
WHERE "logged_at" > NOW() - INTERVAL '1 hour'
ORDER BY "logged_at" DESC
LIMIT 10;
