import type { Token } from "../types";

// Mock API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API endpoints
export const tokenApi = {
  getRecentTokens: async (
    page: number = 1,
    pageSize: number = 15
  ): Promise<{ tokens: Token[]; total: number }> => {
    await delay(500); // Simulate network delay

    const mockTokens: Token[] = [
      { symbol: "SHT", name: "ScapeHopeToken", age: "3m ago" },
      { symbol: "GIRLF", name: "Girlforavalanche", age: "3m ago" },
      { symbol: "SUMMER", name: "Summer", age: "4m ago" },
      { symbol: "POUNCH", name: "POUNCH STAR", age: "7m ago" },
      { symbol: "CHABA", name: "Chaba and Dudukwe Fun", age: "7m ago" },
      { symbol: "CRYPTO", name: "Avalanche", age: "9m ago" },
      { symbol: "DBD", name: "Dont Buy Buddy", age: "12m ago" },
      { symbol: "KEN", name: "KenCrypto", age: "12m ago" },
      { symbol: "CHOICE", name: "MAKER", age: "15m ago" },
      { symbol: "DEGENSAVAX", name: "DEGENSAVAX", age: "18m ago" },
      { symbol: "AVAXGUY", name: "Just A Avax Chill Guy", age: "21m ago" },
      { symbol: "DUGONG", name: "DUGONG", age: "31m ago" },
      { symbol: "USELESS", name: "The Useless Coin", age: "33m ago" },
      { symbol: "TEST", name: "TEST", age: "33m ago" },
      { symbol: "SLERFMASK", name: "SLERFMASK", age: "34m ago" },
    ];

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
      tokens: mockTokens.slice(start, end),
      total: mockTokens.length,
    };
  },

  getTokenPrice: async (
    tokenSymbol: string,
    amount: string
  ): Promise<{ price: string }> => {
    await delay(300);
    // Mock price calculation
    const mockPrice = parseFloat(amount) * 1000;
    return { price: mockPrice.toString() };
  },
};
