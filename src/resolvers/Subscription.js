const newLink = {
    subscribe: (parent, args, context, info) => {
        return context.prisma.$subscribe
            .link({ mutation_in: ['CREATED'] }).node();
    },
    resolve: payload => payload,
};

const newVote = {
    subscribe: (parent, args, context, info) => {
        return context.prisma.$subscribe
            .vote({ mutation_in: ['CREATED'] }).node()
    },
    resolve: payload => payload,
}

module.exports = {
    newLink,
    newVote
};
