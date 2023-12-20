import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

const searchCard = () => {
  return (
    <Card className="max-w-sm">
      <text className="text-2xl">Search For Leads</text>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Enter Position" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Website Designer"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Enter the City" />
          </div>
          <TextInput id="email1" type="email" placeholder="Delhi" required />
        </div>

        <Button type="submit">Search</Button>
      </form>
    </Card>
  );
};

export default searchCard;
