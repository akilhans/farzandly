import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error('[API Error]:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Serverda ichki xatolik yuz berdi';

  // Do not leak sensitive internal database error traces
  res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Kutilmagan xatolik yuz berdi' : message,
    timestamp: new Date().toISOString(),
  });
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: `Marshrut topilmadi: ${req.method} ${req.originalUrl}`,
  });
}
