const express = require('express');
const AgentController = require('./../app/Http/Controllers/AgentController');
const Guard = require('./../app/Providers/GuardServiceProvider');

const router = express.Router();

router.route('/')
    .post(
        Guard.authGuard,
        Guard.restrictToRoles(['new-user']),
        AgentController.signUp
    )
    .get(
        Guard.authGuard,
        Guard.restrictToRoles(['agent']),
        AgentController.getMyAgentProfile
    )
    .patch(
        Guard.authGuard,
        Guard.restrictToRoles(['agent']),
        AgentController.updateMyAgentProfile
    )
    .delete(
        Guard.authGuard,
        Guard.restrictToRoles(['player']),
        AgentController.deleteMyAgentProfile
    );

module.exports = router;
