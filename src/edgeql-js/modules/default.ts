// GENERATED by @edgedb/generate v0.4.1

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $HasAddressλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "address": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "addressDetail": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "city": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "country": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "zipCode": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
}>;
type $HasAddress = $.ObjectType<"default::HasAddress", $HasAddressλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $HasAddress = $.makeType<$HasAddress>(_.spec, "c468d19c-b6a9-11ee-a4db-ab2809d138f3", _.syntax.literal);

const HasAddress: $.$expr_PathNode<$.TypeSet<$HasAddress, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($HasAddress, $.Cardinality.Many), null);

export type $HasTimestampsλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, true, true>;
  "updatedAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
}>;
type $HasTimestamps = $.ObjectType<"default::HasTimestamps", $HasTimestampsλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $HasTimestamps = $.makeType<$HasTimestamps>(_.spec, "c46be954-b6a9-11ee-935c-db2b5424e26f", _.syntax.literal);

const HasTimestamps: $.$expr_PathNode<$.TypeSet<$HasTimestamps, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($HasTimestamps, $.Cardinality.Many), null);

export type $EventλShape = $.typeutil.flatten<$HasAddressλShape & $HasTimestampsλShape & {
  "endsAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "startsAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "placeName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "organizer": $.LinkDesc<$Organizer, $.Cardinality.One, {}, false, false,  false, false>;
  "tickets": $.LinkDesc<$Ticket, $.Cardinality.Many, {}, true, false,  false, false>;
  "<events[is Organizer]": $.LinkDesc<$Organizer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<events": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Event = $.ObjectType<"default::Event", $EventλShape, null, [
  ...$HasAddress['__exclusives__'],
  ...$HasTimestamps['__exclusives__'],
  {tickets: {__element__: $Ticket, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Event = $.makeType<$Event>(_.spec, "c46fde60-b6a9-11ee-982b-875ffaa9a0ea", _.syntax.literal);

const Event: $.$expr_PathNode<$.TypeSet<$Event, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Event, $.Cardinality.Many), null);

export type $LinkOpenλShape = $.typeutil.flatten<$HasTimestampsλShape & {
  "ticket": $.LinkDesc<$Ticket, $.Cardinality.One, {}, false, false,  false, false>;
}>;
type $LinkOpen = $.ObjectType<"default::LinkOpen", $LinkOpenλShape, null, [
  ...$HasTimestamps['__exclusives__'],
]>;
const $LinkOpen = $.makeType<$LinkOpen>(_.spec, "c47ba7d6-b6a9-11ee-a294-595122be6626", _.syntax.literal);

const LinkOpen: $.$expr_PathNode<$.TypeSet<$LinkOpen, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($LinkOpen, $.Cardinality.Many), null);

export type $OrganizerλShape = $.typeutil.flatten<$HasAddressλShape & $HasTimestampsλShape & {
  "users": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "euTaxNumber": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "facebook": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "facebookGroup": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "instagram": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "linkedin": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "taxNumber": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "threads": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "tiktok": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "website": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "events": $.LinkDesc<$Event, $.Cardinality.Many, {}, false, true,  false, false>;
  "<organizer[is Event]": $.LinkDesc<$Event, $.Cardinality.Many, {}, false, false,  false, false>;
  "<organizer": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Organizer = $.ObjectType<"default::Organizer", $OrganizerλShape, null, [
  ...$HasAddress['__exclusives__'],
  ...$HasTimestamps['__exclusives__'],
]>;
const $Organizer = $.makeType<$Organizer>(_.spec, "c4744d88-b6a9-11ee-8946-b7177d88df3d", _.syntax.literal);

const Organizer: $.$expr_PathNode<$.TypeSet<$Organizer, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Organizer, $.Cardinality.Many), null);

export type $ScanλShape = $.typeutil.flatten<$HasTimestampsλShape & {
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "<scans[is Ticket]": $.LinkDesc<$Ticket, $.Cardinality.Many, {}, false, false,  false, false>;
  "<scans": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Scan = $.ObjectType<"default::Scan", $ScanλShape, null, [
  ...$HasTimestamps['__exclusives__'],
]>;
const $Scan = $.makeType<$Scan>(_.spec, "c46ea338-b6a9-11ee-a36e-ebec0ccca40f", _.syntax.literal);

const Scan: $.$expr_PathNode<$.TypeSet<$Scan, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Scan, $.Cardinality.Many), null);

export type $TicketλShape = $.typeutil.flatten<$HasTimestampsλShape & {
  "scans": $.LinkDesc<$Scan, $.Cardinality.Many, {}, false, false,  false, false>;
  "checkedIn": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, true, false, false>;
  "badgeReceivedAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "badgeToken": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "firstName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "gdprAccepted": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "inviteCode": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "lastName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "newsletterSubscribed": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "note": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "organizationName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "token": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<tickets[is Event]": $.LinkDesc<$Event, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<ticket[is LinkOpen]": $.LinkDesc<$LinkOpen, $.Cardinality.Many, {}, false, false,  false, false>;
  "<ticket": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tickets": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Ticket = $.ObjectType<"default::Ticket", $TicketλShape, null, [
  ...$HasTimestamps['__exclusives__'],
]>;
const $Ticket = $.makeType<$Ticket>(_.spec, "c47915c0-b6a9-11ee-ae6a-b109a527ab43", _.syntax.literal);

const Ticket: $.$expr_PathNode<$.TypeSet<$Ticket, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Ticket, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<$HasTimestampsλShape & {
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "firstName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "lastName": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "passwordHash": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<user[is Scan]": $.LinkDesc<$Scan, $.Cardinality.Many, {}, false, false,  false, false>;
  "<users[is Organizer]": $.LinkDesc<$Organizer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<users": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ...$HasTimestamps['__exclusives__'],
]>;
const $User = $.makeType<$User>(_.spec, "c46d6234-b6a9-11ee-8d11-378eb45c96fa", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);



export { $HasAddress, HasAddress, $HasTimestamps, HasTimestamps, $Event, Event, $LinkOpen, LinkOpen, $Organizer, Organizer, $Scan, Scan, $Ticket, Ticket, $User, User };

type __defaultExports = {
  "HasAddress": typeof HasAddress;
  "HasTimestamps": typeof HasTimestamps;
  "Event": typeof Event;
  "LinkOpen": typeof LinkOpen;
  "Organizer": typeof Organizer;
  "Scan": typeof Scan;
  "Ticket": typeof Ticket;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "HasAddress": HasAddress,
  "HasTimestamps": HasTimestamps,
  "Event": Event,
  "LinkOpen": LinkOpen,
  "Organizer": Organizer,
  "Scan": Scan,
  "Ticket": Ticket,
  "User": User
};
export default __defaultExports;
