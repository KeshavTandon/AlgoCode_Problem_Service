# AlgoCode problem setting service

---

## How routing is working?

/api/v1/problems/ping
-because route starts with api
     /api       /v1        /problems         /ping
     apiRouter ->v1Router  ->problemRouter   ->problemController  ->service layer
