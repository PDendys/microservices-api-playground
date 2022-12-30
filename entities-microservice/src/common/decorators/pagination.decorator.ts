import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PaginationParams = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { query } = ctx.switchToHttp().getRequest();

    const { perPage, page } = query;

    if (!query || !page) {
      return { skip: undefined, take: undefined };
    }

    const numPerPage = Number(perPage);
    const numPage = Number(page) || 0;

    const skip = numPage <= 1 ? 0 : numPerPage * numPage - 1;
    const take = numPerPage || undefined;

    return { skip, take };
  },
);
