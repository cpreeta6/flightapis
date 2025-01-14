"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const flight_model_1 = require("./flight.model");
let FlightService = class FlightService {
    constructor() {
        this.flight = [];
    }
    bookFlight(to, from, price, date, seats) {
        let flightid = Math.random().toString();
        const newFlight = new flight_model_1.Flight(flightid, to, from, price, date, seats);
        this.flight.push(newFlight);
        return "flight booked";
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map